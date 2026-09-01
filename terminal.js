const output = document.getElementById("terminal-output");


function openPanel(panel) {

    /* =========================================
       PROJECTS
    ========================================= */

if (panel === "projects") {

    output.innerHTML = `

        <h2 class="panel-title">
            projects/
        </h2>


        <div class="projects-grid">


            <!-- PROJECT 01 -->

            <article class="project">

                <h3>
                    01. International Symposium Website
                </h3>

                <p class="project-description">
                    Syracuse University, New York collaborated with IILM University, Gurugram and they selected me from a competitive pool to take on this project and bring it on the internet.
                </p>

                <img
                    src="project1.jpg"
                    alt="Project 1"
                >

            </article>


            <!-- PROJECT 02 -->

            <article class="project">

                <h3>
                    02. Rinlet Vuln Scan
                </h3>

                <p class="project-description">
                    A minor project for 3rd year of my cse journey which can do basic enumeration scan about a website to check for simple security measures.
                </p>

                <img
                    src="project2.jpg"
                    alt="Project 2"
                >

            </article>


            <!-- PROJECT 03 -->

            <article class="project">

                <h3>
                    03. Ascom Application Solution
                </h3>

                <p class="project-description">
                    Assisted in front end and vulnerability assessment of database of an android application.
                </p>

                <img
                    src="project3.jpg"
                    alt="Project 3"
                >

            </article>


            <!-- PROJECT 04 -->

            <article class="project">

                <h3>
                    04. RepoHunter 
                </h3>

                <p class="project-description">
                    A python based github repository scanner that can be used to search specific or sensitive data published in a public repository.
                </p>

                <img
                    src="project4.jpg"
                    alt="Project 4"
                >

            </article>


            <!-- PROJECT 05 -->

            <article class="project">

                <h3>
                    05. Byteforce Tech Club Site
                </h3>

                <p class="project-description">
                    Built to showcase the greatness of our very own techclub at IILM University!
                </p>

                <img
                    src="project5.jpg"
                    alt="Project 5"
                >

            </article>


        </div>

    `;

}


    /* =========================================
       EXPERIENCE
    ========================================= */

  else if (panel === "experience") {

    output.innerHTML = `

        <h2 class="panel-title">
            experience/
        </h2>


        <!-- EXPERIENCE 01 -->

        <div class="experience-item">

            <h3>
                01. VAPT Analyst Intern
            </h3>

            <p class="experience-company">
                @ Vectr Technologies Pvt Ltd
            </p>

            <p class="experience-description">
                Worked on vulnerability assessment and penetration
                testing of web applications, with a focus on
                identifying security issues and understanding
                practical web application security.
            </p>

          

        </div>



        <!-- EXPERIENCE 02 -->

        <div class="experience-item">

            <h3>
                02. Android Developer Intern
            </h3>

            <p class="experience-company">
                @ Ascom BuildCon Pvt Ltd
            </p>

            <p class="experience-description">
                Worked on Android application development and
                gained practical experience with mobile application
                development, UI implementation and application
                functionality.
            </p>

           

        </div>



        <!-- EXPERIENCE 03 -->

        <div class="experience-item">

            <h3>
                03. Web Developer for Events
            </h3>

            <p class="experience-company">
                @ IILM University
            </p>

            <p class="experience-description">
                Developed and maintained web pages for university
                events, focusing on frontend implementation,
                responsive layouts and presenting event information
                clearly to users.
            </p>

        

        </div>

    `;

}


    /* =========================================
       CERTIFICATES
    ========================================= */
else if (panel === "certificates") {

    output.innerHTML = `

        <h2 class="panel-title">
            certificates/
        </h2>


        <!-- CERTIFICATE 01 -->

        <div class="certificate-item">

            <h3>
                01. Pre Security Certificate
            </h3>

            <p class="certificate-issuer">
                TryHackMe
            </p>

            <img
                src="certificate1.jpg"
                alt="Pre Security Certificate"
            >

        </div>



        <!-- CERTIFICATE 02 -->

        <div class="certificate-item">

            <h3>
                02. Ethical Hacking
            </h3>

            <p class="certificate-issuer">
                Oak Academy — Udemy
            </p>

            <img
                src="certificate2.jpg"
                alt="Ethical Hacking Certificate"
            >

        </div>



        <!-- CERTIFICATE 03 -->

        <div class="certificate-item">

            <h3>
                03. Deloitte Australia - Cyber Job Simulation
            </h3>

            <p class="certificate-issuer">
                Deloitte
            </p>

            <img
                src="certificate3.jpg"
                alt="Deloitte Cyber Job Simulation Certificate"
            >

        </div>



        <!-- CERTIFICATE 04 -->

        <div class="certificate-item">

            <h3>
                04. Tata - Cybersecurity Analyst Job Simulation
            </h3>

            <p class="certificate-issuer">
                Forage
            </p>

            <img
                src="certificate4.jpg"
                alt="Tata Cybersecurity Analyst Job Simulation Certificate"
            >

        </div>



        <!-- CERTIFICATE 05 -->

        <div class="certificate-item">

            <h3>
                05. Frontend Developer - Modern HTML, CSS & JS
            </h3>

            <p class="certificate-issuer">
                Udemy
            </p>

            <img
                src="certificate5.jpg"
                alt="Frontend Developer Certificate"
            >

        </div>

    `;

}

    /* =========================================
       ADVENTURE
    ========================================= */

    else if (panel === "adventure") {

        output.innerHTML = `

            <h2 class="panel-title">
                adventure/
            </h2>


            <p class="adventure-text">

                Not everything happens behind a screen.

            </p>


            <div class="adventure-grid">


                <figure>

                    <img
                        src="trip1.jpg"
                        alt="Travel photograph 1"
                    >

                    <figcaption>
                        trip_01.jpg
                    </figcaption>

                </figure>


                <figure>

                    <img
                        src="trip2.jpg"
                        alt="Travel photograph 2"
                    >

                    <figcaption>
                        trip_02.jpg
                    </figcaption>

                </figure>


                <figure>

                    <img
                        src="trip3.jpg"
                        alt="Travel photograph 3"
                    >

                    <figcaption>
                        trip_03.jpg
                    </figcaption>

                </figure>


                <figure>

                    <img
                        src="trip4.jpg"
                        alt="Travel photograph 4"
                    >

                    <figcaption>
                        trip_04.jpg
                    </figcaption>

                </figure>


                 <figure>

                    <img
                        src="trip5.jpg"
                        alt="Travel photograph 5"
                    >

                    <figcaption>
                        trip_05.jpg
                    </figcaption>

                </figure>
                 <figure>

                    <img
                        src="trip6.jpg"
                        alt="Travel photograph 5"
                    >

                    <figcaption>
                        trip_06.jpg
                    </figcaption>

                </figure>


            </div>

        `;

    }


    /* =========================================
       SKILLS
    ========================================= */

    else if (panel === "skills") {

        output.innerHTML = `

            <h2 class="panel-title">
                skills/
            </h2>


            <div class="skill-list">

                <span class="skill">
                    HTML
                </span>

                <span class="skill">
                    CSS
                </span>

                <span class="skill">
                    JavaScript
                </span>

                <span class="skill">
                    React
                </span>

 

                <span class="skill">
                 Linux
                </span>

                <span class="skill">
                 Nmap
                </span>

                <span class="skill">
                 Osint 
                </span>

                <span class="skill">
                 Dorking
                </span>

                <span class="skill">
                    Docker
                </span>

                <span class="skill">
                    Firebase Console
                </span>

                <span class="skill">
                 Siem (XDR,EDR,Soar)
                </span>

                <span class="skill">
                 Apache
                </span>

                <span class="skill">
                 NginX
                </span>

                <span class="skill">
                 Promt Engineering
                </span>

                <span class="skill">
                 Owasp top 10
                </span>

                <span class="skill">
                 Vunerability Assessment
                </span>

                <span class="skill">
                    Git
                </span>

                <span class="skill">
                    Cybersecurity
                </span>

            </div>

        `;

    }


    /* =========================================
       CONTACT
    ========================================= */

    else if (panel === "contact") {

        output.innerHTML = `

            <h2 class="panel-title">
                contact/
            </h2>


            <p class="panel-text">

                Want to get in touch?

                <br><br>

                Email:

                <span class="blue-text">
                    3threetm@gmail.com
                </span>
                <br>
                

            </p>

        `;

    }

}