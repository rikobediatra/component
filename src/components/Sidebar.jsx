import Link from "./Link";

function Sidebar() {
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
        {label: 'Modal', path: '/modal'},
        {label: 'Tabel', path: '/tabel'},
        {label: 'Counter', path: '/counter'},
    ];

    const rederedLinks = links.map((link) => {
        return <Link 
            key={link.label} 
            to={link.path} 
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.label}
        </Link>
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {rederedLinks}
        </div>
    );
}

export default Sidebar;