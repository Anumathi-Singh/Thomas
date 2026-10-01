import { BookOpen } from 'lucide-react';
export default function Brand({ light = false }: { light?: boolean }) { return <a className={`brand ${light ? 'brand-light' : ''}`} href="/" aria-label="St. Thomas home"><span className="crest"><BookOpen size={25} strokeWidth={1.4}/><span>ST</span></span><span><strong>St. Thomas</strong><small>COLLEGE OF EDUCATION</small></span></a>; }
