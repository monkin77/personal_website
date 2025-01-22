// components/Divider.js

const Divider = ({ className }: { className?: string }) => {
    return <div className={`h-[1px] my-4 md:my-6 bg-gradient-to-r from-transparent via-gray-300 to-transparent ${className}`} />;
};

export default Divider;
