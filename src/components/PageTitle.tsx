import PropTypes from 'prop-types';

interface PageTitleProps {
    heading: string;
    subHeading?: string;
}

const PageTitle = ({ heading, subHeading }: PageTitleProps) => {
    return (
        <div>
            <h2 className="text-4xl text-center font-medium capitalize">{heading}</h2>
            <p className="text-center mx-auto font-light capitalize max-w-[600px]">{subHeading}</p>
        </div>
    );
};

PageTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default PageTitle;
