import './index.css';

export const CategoryItem = () => {
    return (
        <div className="category-item">
            <img src="/usaji.png" alt="Usaji" />
            <span className="title">Chiikawa</span>
            <div className="info">
                <div className='info-left'>
                    <span className='subtitle'>Floor</span>
                    <span className='price'>9.6 TBC</span>
                </div>
                <div className='info-right'>
                    <span className='subtitle'>Total Volume</span>
                    <span className='price'>82 TBC</span>
                </div>
            </div>
        </div>
    );
};
