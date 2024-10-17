// import { useEffect, useState } from "react";
import "./index.css"

const Collected = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/api/your-endpoint'); // 替换为你的后端接口
    //             const result = await response.json();
    //             setData(result); // 假设返回的数据是一个数组
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    const data = [{ collection: "Chii", value: 3 }];


    return (
        <div>
            <div className="collected-sidebar">
                <span>Collections</span>
                <div className="collected-search">
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Collection</th>
                                <th style={{ borderBottom: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.collection}</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.value}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={2} style={{ padding: '8px', textAlign: 'center' }}>No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Collected;