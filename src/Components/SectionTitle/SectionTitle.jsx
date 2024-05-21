
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mb-10">
            <p className="text-[#D99904] text-xl border-b-4 py-3 mb-3">---{subHeading}---</p>
            <h2 className="border-b-4 text-[#151515] text-5xl py-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;