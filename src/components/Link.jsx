/* eslint-disable react/prop-types */
import useNavigation from "../hooks/useNavigation";

// for css
import classNames from "classnames";

function Link({ to, children, className, activeClassName}){
    const { navigate,  currentPath} = useNavigation();

    const classes = classNames('text-blue-500',
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {
        // to open in different pages by clicking long
        if (event.metakey || event.ctrlKey){
            return;
        }

        event.preventDefault();

        navigate(to);
    };

    return (
        <a href={to} onClick={handleClick} className={classes}>{children}</a>
    );
}

export default Link;