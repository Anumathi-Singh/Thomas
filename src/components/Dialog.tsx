import { useEffect, useRef, type ReactNode } from 'react';
export default function Dialog({ children, title, onClose }: { children: ReactNode; title: string; onClose: () => void }) {
 const ref = useRef<HTMLDialogElement>(null);
 useEffect(() => { const dialog = ref.current; dialog?.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { dialog?.close(); document.body.style.overflow = previous; }; }, []);
 return <dialog ref={ref} className="modal native-modal" aria-labelledby={title} onCancel={e => {e.preventDefault();onClose();}} onClick={e => { if(e.target===e.currentTarget) { const rect=e.currentTarget.getBoundingClientRect(); if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom) onClose(); } }}>{children}</dialog>;
}
