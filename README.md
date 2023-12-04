# Set up
1. Install các module 
```bash
npm install express 
npm install mssql msnodesqlv8 
npm install path 
npm install body-parser 
npm install method-override 
npm install express-handlebars 
npm install express-session
npm install dotenv
```
2. Tải SQL Server & SQL Server Management Studio (SSMS).
3. Ghi nhớ dòng MSSQLSERVER. !important
4. Dùng SSMS connect vào SQL Server local.
5. Chạy các queries trong SSMS theo thứ tự CreateDB CreateEntity CreateFakeData.
6. Đổi tên DB_SERVER và DB_NAME trong .env

# Debug
1. Chuyển thư mục root thành web_source. 
```bash
npm start
```