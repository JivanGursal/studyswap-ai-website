import React, { AnchorHTMLAttributes } from 'react';
import { useRouter } from './RouterContext';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();

  const isActive = exact ? currentPath === to : currentPath === to || (to !== '/' && currentPath.startsWith(to));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If external link, download link, static file, or modified click (Ctrl/Cmd click), let browser handle it
    if (
      to.startsWith('http://') ||
      to.startsWith('https://') ||
      to.startsWith('mailto:') ||
      to.startsWith('tel:') ||
      to.startsWith('/downloads/') ||
      to.endsWith('.apk') ||
      props.download !== undefined ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    if (currentPath !== to) {
      navigate(to);
    }
  };

  const combinedClass = `${className} ${isActive ? activeClassName : ''}`.trim();

  // Ensure href reflects the configured base so anchor links point to the
  // correct project sub-path when deployed (e.g. /studyswap-ai-website/)
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const href = to.startsWith('http://') || to.startsWith('https://') ? to : `${base}${to}`;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={combinedClass}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
