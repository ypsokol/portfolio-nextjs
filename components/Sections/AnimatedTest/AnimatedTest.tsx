import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedTest = () => {
  return (
    <div className="containerFramer">
      <motion.h1 layoutId="header">My shop</motion.h1>
      <div className="product-container">
        {["shoe", "watch", "headphones"].map((product) => (
          <Link key={product} href={product} scroll={false}>
            <a>
              <motion.img
                layoutId={product}
                className="image"
                src={"test/" + product + ".jpg"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTest;
