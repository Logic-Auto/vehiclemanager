import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const successVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "backIn",
      duration: 0.6,
    },
  },
};

const SuccessMessage = () => {
  const refresh = () => window.location.reload();
  return (
    <motion.section
      className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-2 text-center"
      variants={successVariants}
      initial="hidden"
      animate="visible"
    >
  
      <h4 className="text-2xl font-semibold text-white md:text-3xl">
        Thank you!
      </h4>
      <p className="text-sm max-w-md text-neutral-300 md:text-base">
       
      </p>
      <div className="flex items-center mt-6">
        <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
          <Button
            onClick={refresh}
            className="relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white"
          >
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessMessage;
