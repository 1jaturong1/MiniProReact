import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Fire: FC = () => {

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
                    <h3>ประกันทรัพย์สิน (Property Insurance)</h3>
                    <div>
                        <h2>ความหมาย:</h2>
                        <p>
                            ให้ความคุ้มครองทรัพย์สินต่างๆ เช่น บ้าน อาคาร โรงงาน หรือสิ่งของต่างๆ
                            จากความเสียหายที่เกิดจากไฟไหม้ น้ำท่วม ภัยธรรมชาติ การโจรกรรม หรืออุบัติเหตุอื่นๆ
                        </p>

                        <h2>ประเภทหลัก:</h2>
                        <ul>
                            <li><strong>ประกันอัคคีภัย (Fire Insurance):</strong> คุ้มครองความเสียหายจากไฟไหม้ ฟ้าผ่า ระเบิด และภัยเสริมอื่นๆ</li>
                            <li><strong>ประกันภัยบ้านและที่อยู่อาศัย:</strong> คุ้มครองบ้านพักอาศัยและทรัพย์สินภายในบ้านจากความเสียหายที่ระบุไว้</li>
                            <li><strong>ประกันภัยโรงงาน/อาคารพาณิชย์:</strong> คุ้มครองทรัพย์สินในเชิงธุรกิจ</li>
                        </ul>

                        <h2>ประโยชน์:</h2>
                        <ul>
                            <li>ช่วยลดความเสี่ยงจากความสูญเสียทรัพย์สินมูลค่าสูง</li>
                            <li>เพิ่มความอุ่นใจในการใช้ชีวิตหรือดำเนินธุรกิจ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}













export default Fire;