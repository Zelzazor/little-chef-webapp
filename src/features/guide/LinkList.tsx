import { Link } from 'react-router-dom';

export const LinkList = () => {
  const links = [
    {
      label: 'How to sign in?',
      href: '/guide/getting-started',
    },
    {
      label: 'Dashboard',
      href: '/guide/dashboard',
    },
    {
      label: 'Users',
      href: '/guide/users',
    },
    {
      label: 'Submissions',
      href: '/guide/submissions',
    },
    {
      label: 'Recipes',
      href: '/guide/recipes',
    },
  ];

  return (
    <div>
      <div className="border border-solid border-gray-600 rounded flex flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="inline-block h-full px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
