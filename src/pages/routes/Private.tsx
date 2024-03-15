import { auth } from "../../Services/firebaseConecction";
import { onAuthStateChanged } from "firebase/auth";

import { ReactNode, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}
function Private({ children }: PrivateProps) {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
        };

        localStorage.setItem("@linktreeReact", JSON.stringify(userData));
        setLoading(false);
        setSigned(true);
      } else {
        setLoading(false);
        setSigned(false);
      }
    });
    return () => {
      unsub();
    };
  }, []);
  if (loading) return <div>Carregando ...</div>;
  if (!signed) {
    return <Navigate to={"/login"} />;
  }

  return children;
}

export default Private;
