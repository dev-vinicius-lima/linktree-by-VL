import { useEffect, useState } from "react";
import Social from "../../components/social";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { db } from "../../Services/firebaseConecction";
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

interface LinksProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface SocialLinksProps {
  facebook: string;
  instagram: string;
  linkedin: string;
}

const Home = () => {
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        const list = [] as LinksProps[];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });
        setLinks(list);
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data()?.instagram,
            linkedin: snapshot.data()?.linkedin,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="text-white md:text-4xl text-3xl font-bold mt-20 mb-8 flex text-center justify-center">
        Linktree by VL
      </h1>

      <Link
        to={"/admin"}
        className="py-1 px-5 mb-4 w-40 bg-yellow-500 h-9 flex items-center justify-center rounded-lg  hover:bg-slate-50 hover:text-yellow-500"
      >
        Login
      </Link>
      <span className="text-gray-50 mb-5 mt-5">Veja meus links 👇</span>
      <main className="flex - flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          <section
            style={{ backgroundColor: link.bg }}
            key={link.id}
            className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
          >
            <a href={link.url} target="_blank">
              <p className="text-base md:text-lg" style={{ color: link.color }}>
                {link.name}
              </p>
            </a>
          </section>
        ))}

        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            <Social url={socialLinks?.facebook}>
              <FaFacebook size={35} color="#fff" />
            </Social>
            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#fff" />
            </Social>
            <Social url={socialLinks?.linkedin}>
              <FaLinkedin size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
};

export default Home;
