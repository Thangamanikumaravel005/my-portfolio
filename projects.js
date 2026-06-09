function showDetails(project){

    const info = document.getElementById("project-info");

    if(project === "water"){
        info.innerHTML = `
        <h2>Smart Water Conservation System</h2>
        <br>
        <p>
        Smart Water Conservation System

Developed an IoT-based Smart Water Conservation System to promote efficient and sustainable water management. The system utilizes sensors, microcontrollers, and automation technologies to monitor water consumption in real time, detect leakages, and optimize water usage. It provides continuous data collection and analysis through web and mobile applications, enabling users to track consumption patterns and receive instant alerts about abnormal water usage. By integrating smart irrigation control and automated monitoring, the project helps reduce water wastage, improve resource efficiency, and support environmental sustainability in residential, agricultural, and industrial applications. The project strengthened my skills in IoT development, sensor integration, microcontroller programming, problem-solving, and web and mobile application development. 

        </p>
        `;
    }

    else if(project === "theft"){
        info.innerHTML = `
        <h2>Theft Alert Notification System</h2>
        <br>
        <p>

Developed an IoT-based Theft Alert Notification System to enhance security through real-time monitoring and instant alert mechanisms. The system uses sensors to detect unauthorized movement, tampering, or intrusion and immediately sends notifications to users through SMS and IoT platforms. By continuously monitoring the protected area, the system enables quick response to potential security threats and helps prevent theft incidents. The project integrates sensor technology, cloud connectivity, and automated alert systems to provide a reliable and efficient security solution. Through this project, I gained hands-on experience in IoT development, sensor integration, cloud computing, real-time monitoring, and problem-solving while designing a practical solution for modern security challenges.
        </p>
        `;
    }

    info.style.display = "block";

    info.scrollIntoView({
        behavior:"smooth"
    });
}