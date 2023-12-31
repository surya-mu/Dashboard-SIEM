# A SIEM/Wazuh Dashboard Application `Using MERN Stack`.

#### Author : surya-mu


<h2>Steps to run the Application:</h2>

 1. Click on code </> dropdown and copy the .git url then use this command in your terminal.
```git
git clone [URL]
``` 


2. After it has cloned to your Device's directory do
 ```git 
cd CDAC-SIEM
``` 

3. Install all dependencies of the project using node.
```js
npm install
``` 
*If you don't have node.js installed in your device, go to [node](https://nodejs.org/en/download/current) and download the latest version.*

4. Ensure you have [Live Server](https://github.com/ritwickdey/vscode-live-server-plus-plus) Extension in your VSCode now click the **Go Live** Button

    ![image](https://github.com/surya-mu/Dashboard-SIEM/assets/101094019/aba1398a-4dbb-4500-8e2f-d9ebf6d1a89e)


5. Select ``agent_details.json`` from the directory window.
    ![image](https://github.com/surya-mu/Dashboard-SIEM/assets/101094019/a27eceb7-d280-42e7-9cd8-41ff2dc2a8cc)


Now a popup will be shown
![image](https://github.com/surya-mu/Dashboard-SIEM/assets/101094019/2f7b506d-9848-49d6-b873-6aef76ce7785)




6. Now you are ready,
 After setting up and following till Step 5, Do:
```
cd frontend
```
  and then run
```js
npm start
``` 
or
```
yarn dev
``` 
depending on terminal.

7. Check your `localhost:3000/` where the React Application is running.

8. Backend folder contains connection between **Node.js** and **Django Rest API** and also a json file hosted in a seperate file called **Agent_Details.json**.



<hr>

**Screenshots of the Project**

*Note: All the screenshots and the data provided in this Project contain dummy data as actual Project was done in a Secure connection to a undisclosable server, which I had acccess during the Internship period, hence only for display purposes I have added dummy json files, for the user to see how the project looked like. Thanks.*

![image](https://github.com/surya-mu/Dashboard-SIEM/assets/101094019/35960ce8-6e67-49d1-97ff-13f962ddc331)

![image](https://github.com/surya-mu/Dashboard-SIEM/assets/101094019/e28656af-ab06-438d-8d2f-b6046d96b390)

![image](https://github.com/surya-mu/Dashboard-SIEM/assets/101094019/a5349c70-f853-4919-989e-b64cb92a4fd6)


*This was a Project Made during my Internship at C-DAC**


