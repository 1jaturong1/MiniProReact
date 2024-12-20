import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Motor: FC = () => {

    const navigate = useNavigate();

    const whenClick = () => {
        navigate("/login");
    }
    const whenClickToHome = () => {
        navigate("/home");
    }
    return <>
        <div className="box">
            <div className='top-header'>
                <h2 className='TOP-text' style={{ textAlign: "center" }}  >CAR INURANCE INSURANCE</h2>
                <div className='top-logo'>
                    <img src='img/โลโก้ประกันยานยนต์.jpg' alt='Logo' />

                </div>

                <div className="logout">
                    <button onClick={whenClick}>Logout</button>
                </div>
            </div>
            <div style={{ marginTop: "130px" }}>
                <button onClick={whenClickToHome}>Home</button>
            </div>
            <div style={{ textAlign: "center" }}><h1>ผลิตภัณฑ์</h1></div>
            <div className="content" style={{ position: "absolute" }}>
                <div className="top-text" >

                    <img src='img/motor.png' width='120' />
                    <h3>ประกันภัยรถยนต์ (Motor Insurance)</h3>
                    <div>
                        <h2>ความหมาย:</h2>
                        <p>
                            ประกันภัยรถยนต์ให้ความคุ้มครองความเสียหายที่เกิดขึ้นกับรถยนต์ ผู้ขับขี่ ผู้โดยสาร
                            หรือบุคคลภายนอกจากอุบัติเหตุ รวมถึงความรับผิดชอบทางกฎหมายต่อบุคคลที่สาม
                        </p>

                        <h2>ประเภทของประกันรถยนต์:</h2>
                        <ul>
                            <li><strong>ประกันภัยชั้น 1:</strong> คุ้มครองครอบคลุมที่สุด ทั้งความเสียหายของรถคันเอาประกัน, รถคู่กรณี, ไฟไหม้, สูญหาย และภัยธรรมชาติ</li>
                            <li><strong>ประกันภัยชั้น 2+:</strong> คุ้มครองคล้ายชั้น 1 แต่ไม่รวมการชนแบบไม่มีคู่กรณี</li>
                            <li><strong>ประกันภัยชั้น 3+:</strong> คุ้มครองความเสียหายเฉพาะรถคู่กรณีและกรณีรถชน</li>
                            <li><strong>ประกันภัยชั้น 3:</strong> คุ้มครองเฉพาะความรับผิดชอบต่อบุคคลภายนอก</li>
                        </ul>

                        <h2>ประโยชน์:</h2>
                        <ul>
                            <li>ช่วยบรรเทาความเสี่ยงจากค่าซ่อมรถหรือค่าชดเชยเมื่อเกิดอุบัติเหตุ</li>
                            <li>ให้ความคุ้มครองชีวิตและทรัพย์สินของผู้ขับขี่, ผู้โดยสาร และบุคคลภายนอก</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>


    </>












}
export default Motor;