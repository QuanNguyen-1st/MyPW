# Set up
1. Install các module (và nên sử dụng node các phiên bản 16.0 || 18.0 || 20.0)
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
2. Tải SQL Server ([here](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)) & SQL Server Management Studio (SSMS) ([here](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)).
3. Ghi nhớ dòng MSSQLSERVER khi install xog SQL Server. !important
4. Dùng SSMS connect vào SQL Server local.
5. Chạy các queries trong SSMS theo thứ tự CreateDB CreateEntity CreateFakeData.
6. Tạo file tên .env trong thư mục web_source với 2 biến (thay Server thành tên server local).
```bash
DB_SERVER=Server
DB_NAME=mypw
```
# Debug
1. Chuyển thư mục root thành web_source. 
```bash
npm start
```
