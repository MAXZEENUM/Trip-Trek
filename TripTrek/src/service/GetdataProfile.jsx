import axios from "axios";

const GetdataProfileService = {
    data:[],
    // Method สำหรับดึงข้อมูลโปรไฟล์
    getData: async () => {
        try {
            const result = await axios.get(`http://localhost:3000/profile`);
            return result.data; // คืนค่าข้อมูลที่ได้รับ
        } catch (error) {
            console.error(error);
            throw error; // เพิ่มการ throw error เพื่อให้เรียกใช้ได้
        }
    },

    // Method สำหรับดึงข้อมูลที่อยู่ใน object data
    getDataList: () => {
        return this.data; // คืนค่าข้อมูลที่เก็บไว้ใน data
    },

    // Method สำหรับค้นหาข้อมูลจาก data ตาม key
    findDataByKey: (key) => {
        return this.data.find(item => item.name === key); // ค้นหาข้อมูลที่มี key ตรงกัน
    }
};

export default GetdataProfileService;
