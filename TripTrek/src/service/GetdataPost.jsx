import axios from "axios";

const GetdataPostService = {
    data:[],
    // Method สำหรับดึงข้อมูลโปรไฟล์
    getData: async () => {
        try {
            const result = await axios.get(`http://localhost:3000/content/post`);
            return result.data; // คืนค่าข้อมูลที่ได้รับ
        } catch (error) {
            console.error(error);
            throw error; // เพิ่มการ throw error เพื่อให้เรียกใช้ได้
        }
    },

    // Method สำหรับค้นหาข้อมูลจาก data ตาม key
    findDataByKey: async (country) => {
        const result = await axios.get(`http://localhost:3000/content/post`);
        return result.data.find(item => item.country === country); // ค้นหาข้อมูลที่มี key ตรงกัน
    }
};

export default GetdataPostService;
