import type { SectionTitleProps } from '@/components/section-title/section-title.props'

const SectionTitle = ({ title, subtitle, ...props }: SectionTitleProps): JSX.Element => {
    return (
        <div {...props} >
            <h3 className="text-4xl font-bold">{title}</h3>
            <p className={"mt-1 opacity-80 mb-5"}>
                {subtitle}
            </p>
        </div>
    );
};

export default SectionTitle;
