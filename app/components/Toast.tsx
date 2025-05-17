import React, { useEffect } from 'react';
import styled from 'styled-components';

const ToastWrapper = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ type }) => (type === 'success' ? '#4ade80' : '#f87171')};
  color: #000;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1000;
`;

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);
  return <ToastWrapper type={type}>{message}</ToastWrapper>;
};
