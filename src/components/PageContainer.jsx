import './pageContainer.module.css';
const PageContainer = ({ children, styles }) => {
    return (
        <div className={`${styles} page-container`}>
            {children}
        </div>
    );
}   
export default PageContainer;