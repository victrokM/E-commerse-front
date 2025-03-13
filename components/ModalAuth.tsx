import React, { JSX, useState } from 'react';
import Modal from './Display/Modal';
import Login from './Login';
import Register from './Register';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export default function ModalAuth({ isOpen, toggle }: Props): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} breakPointWidth="sm:w-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'login' : 'register'}
            initial={{ x: isLogin ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isLogin ? 100 : -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {isLogin ? <Login /> : <Register />}
          </motion.div>
        </AnimatePresence>
        <div>
          <p
            onClick={() => setIsLogin(!isLogin)}
            className="text-cyan-700 cursor-pointer"
          >
            {isLogin ? 'Create an account' : 'Already have an account? Sign in'}
          </p>
        </div>
      </Modal>
    </div>
  );
}
