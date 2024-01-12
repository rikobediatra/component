/* eslint-disable react/prop-types */
import classNames from 'classnames';

function Panel({ children, className, ...rest}) {
    const finalClassNames = classNames(
        "cursor-pointer border rounded p-3 shadow bg-white w-full",
        className
    );

    return (
        <div {...rest} className={finalClassNames} >
            {children}
        </div>
    );

}

export default Panel;