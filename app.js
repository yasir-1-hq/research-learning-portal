const steps = [
["Choose Research Topic","Select a clear, focused, researchable and meaningful topic.","Start with a broad area of interest and narrow it into a specific research topic.","Example: Instead of 'Afghan refugees', study 'Identity crisis among Afghan refugees born in Pakistan'.","Write 2–3 possible topics and discuss the best one with your supervisor."],
["Supervisor Approval","Discuss the proposed topic with your supervisor.","Explain why the topic matters and revise it according to supervisor feedback.","Your supervisor may help narrow the population, location or research scope.","Prepare your topic title and a short explanation for your supervisor."],
["Research Proposal","Prepare a proposal explaining what you will research and how.","Include background, problem statement, questions, objectives, literature review, framework, methodology and references.","Your proposal should clearly show what you plan to study.","Complete each proposal section and get supervisor feedback."],
["Literature Search","Find and study relevant previous research.","Use Google Scholar and academic databases with focused keywords.","Search combinations such as refugee identity, Afghan refugees, migration and identity.","Create a list of useful academic sources."],
["Research Gap","Identify what previous research has not adequately addressed.","Compare previous studies and identify an unanswered question, population, location, theory or methodological issue.","A gap might be limited research on Afghan refugees born in Pakistan in Kohat.","Write your research gap in clear academic language."],
["Objectives & Questions","Develop clear research objectives and research questions.","Questions and objectives should directly connect with the research problem.","For qualitative research, questions can explore experiences, perceptions and identity.","Write objectives and matching research questions."],
["Theoretical Framework","Select a suitable theory or conceptual framework.","Explain the theory, its concepts and how it helps understand your research problem.","Identity theories may provide concepts for understanding belonging and identity.","Choose a theory with your supervisor and explain its relevance."],
["Methodology","Choose your research approach, design, population and methods.","Explain whether your study is qualitative, quantitative or mixed methods and justify the design.","A qualitative study may use semi-structured interviews to explore lived experiences.","Write your methodology section."],
["Ethical Approval","Complete the required research ethics procedure.","Follow university ethics requirements before collecting data from human participants.","Ethical approval helps protect participants and the researcher.","Check your university requirements and obtain approval before data collection."],
["Interview Questions","Prepare research questions or data-collection instruments.","Questions should be clear, relevant and appropriate for participants.","Use open-ended questions when exploring personal experiences.","Prepare and pilot your interview guide where appropriate."],
["Participant Selection","Define your population and sampling strategy.","Explain who will participate, inclusion criteria and sampling strategy.","Participants should match the approved research design and criteria.","Prepare your participant selection plan."],
["Informed Consent","Obtain informed consent before participation.","Participants should understand the study, confidentiality and their right to withdraw.","Provide an understandable consent form before interviews.","Prepare the consent form and consent procedure."],
["Data Collection","Collect data according to your approved methodology.","Conduct interviews, surveys, observations or other approved methods consistently and ethically.","Keep accurate records and protect participant confidentiality.","Complete data collection according to the approved plan."],
["Transcription","Convert recorded qualitative interviews into written data.","Transcribe accurately and protect participant identities.","Use participant codes instead of real names when appropriate.","Transcribe and securely organize your interview data."],
["Coding","Organize meaningful parts of qualitative data.","Read the data carefully and label meaningful segments with codes.","Codes may represent ideas such as belonging, discrimination or identity conflict.","Create and review your initial codes."],
["Theme Development","Develop themes from related codes.","Group related codes, review patterns and develop themes that answer research questions.","Themes should be supported by actual data.","Create a theme table showing codes and supporting evidence."],
["Findings","Present what your actual research data shows.","Findings must be based on real collected data.","Never invent participants, quotations, results or themes.","Write findings using your actual evidence."],
["Discussion","Interpret findings and connect them with previous research.","Explain what findings mean and compare them with literature and theory.","Show whether your findings support, extend or differ from previous research.","Connect each major finding to relevant literature."],
["Conclusion","Summarize the main conclusions of the study.","Answer the research questions based on evidence.","Do not introduce unsupported claims in the conclusion.","Write a concise evidence-based conclusion."],
["Recommendations","Provide useful recommendations based on evidence.","Recommendations should logically follow from findings.","Recommendations may address policy, education, community support or future research.","Write practical recommendations supported by findings."],
["Limitations","Explain important limitations of your study.","Discuss sample, location, time, access, methodology and other constraints.","Limitations help readers understand the boundaries of the research.","Write an honest limitations section."],
["Abstract","Write a concise summary of the complete study.","Normally include background, purpose, methods, key findings and conclusion according to the journal.","The abstract should represent the complete article accurately.","Write and revise your abstract after completing the article."],
["References","Prepare the complete reference list.","Every cited source should appear in the reference list in the required style.","Follow APA 7 or the journal's required referencing style.","Check every in-text citation against the reference list."],
["Similarity Check","Check originality and citation problems.","Review copied wording, missing citations and inappropriate paraphrasing.","Similarity percentage alone does not determine plagiarism.","Correct citation and paraphrasing problems before submission."],
["Journal Selection","Choose a suitable and legitimate journal.","Check scope, peer review, indexing claims, fees, guidelines and reputation.","The journal should genuinely match your research subject.","Make a shortlist of suitable journals."],
["Journal Formatting","Format the manuscript according to journal requirements.","Follow instructions for structure, word count, references, tables and files.","Different journals have different formatting requirements.","Download and follow the target journal's author guidelines."],
["Cover Letter","Prepare a professional submission letter.","Introduce the manuscript and explain its relevance to the journal.","Keep the letter concise and professional.","Prepare a cover letter for your selected journal."],
["Online Submission","Upload and submit your manuscript through the journal system.","Complete author information, files, declarations and other required fields carefully.","Check all uploaded files before clicking submit.","Submit the manuscript and save the submission confirmation."],
["Editorial Screening","The journal checks the manuscript before peer review.","Editors may check scope, quality, formatting, originality and compliance.","A manuscript can be rejected at this stage without peer review.","If screened successfully, the manuscript may move to peer review."],
["Peer Review","Independent reviewers evaluate the research.","Reviewers may assess theory, methodology, analysis, writing and contribution.","Reviewer comments are normally used to improve the manuscript.","Read reviewer comments carefully and prepare responses."],
["Revision","Respond to reviewer comments and improve the article.","Address each comment professionally and explain your changes.","Use a response-to-reviewers document when required.","Create a point-by-point response."],
["Resubmission","Submit the revised manuscript and response document.","Check every reviewer comment, file and submission requirement.","Make sure the revised manuscript matches your response letter.","Submit the revised version before the deadline."],
["Acceptance","Receive the journal's publication decision.","After acceptance, follow instructions for final files, agreements and proofing.","Acceptance means the manuscript has passed the journal's review process, subject to final publication steps.","Save the acceptance letter safely."],
["Publication & DOI","Complete final proof and publication.","Review the final proof carefully. A published article may receive a DOI.","Check author names, affiliation, tables, references and other final details.","Save the published article and DOI."],
["University Record","Keep publication documents for university records.","Save acceptance letter, published article, DOI, journal information and required supporting documents.","Universities may require publication evidence for academic records.","Create a folder containing all publication documents."]
];

const app = document.getElementById("stepList");
const search = document.getElementById("searchBox");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

let currentStep = 0;

function completed(){
    return JSON.parse(localStorage.getItem("researchCompleted") || "[]");
}

function saveCompleted(arr){
    localStorage.setItem("researchCompleted", JSON.stringify(arr));
}

function updateProgress(){
    const done = completed().length;
    const percent = Math.round((done / steps.length) * 100);

    if(progressText) progressText.textContent = `${done} / ${steps.length} — ${percent}%`;
    if(progressFill) progressFill.style.width = `${percent}%`;
}

function renderSteps(filter=""){
    if(!app) return;

    const done = completed();
    const query = filter.toLowerCase();

    app.innerHTML = "";

    steps.forEach((s,i)=>{
        if(query && !s[0].toLowerCase().includes(query) && !s[1].toLowerCase().includes(query)) return;

        const card = document.createElement("div");
        card.className = "app-step" + (done.includes(i) ? " completed" : "");

        card.innerHTML = `
            <div class="step-number">STEP ${String(i+1).padStart(2,"0")}</div>
            <div class="step-info">
                <h3>${s[0]}</h3>
                <p>${s[1]}</p>
                <button class="learn-btn">Open Full Lesson →</button>
            </div>
        `;

        card.querySelector(".learn-btn").onclick = () => openLesson(i);
        app.appendChild(card);
    });
}

function openLesson(index){
    currentStep = index;
    const s = steps[index];
    const done = completed();

    let box = document.getElementById("lessonViewer");

    if(!box){
        box = document.createElement("div");
        box.id = "lessonViewer";
        box.className = "lesson-viewer";
        document.body.appendChild(box);
    }

    box.innerHTML = `
        <div class="lesson-card">
            <div class="lesson-top">
                <span>STEP ${String(index+1).padStart(2,"0")} OF ${steps.length}</span>
                <button onclick="closeLesson()">✕</button>
            </div>

            <h2>${s[0]}</h2>

            <div class="lesson-part">
                <h3>📖 What is it?</h3>
                <p>${s[1]}</p>
            </div>

            <div class="lesson-part">
                <h3>🎯 How to do it?</h3>
                <p>${s[2]}</p>
            </div>

            <div class="lesson-part">
                <h3>💡 Example</h3>
                <p>${s[3]}</p>
            </div>

            <div class="lesson-part">
                <h3>✅ Student Task</h3>
                <p>${s[4]}</p>
            </div>

            <div class="lesson-actions">
                <button onclick="previousStep()" ${index===0?"disabled":""}>← Previous</button>

                <button class="complete-button" onclick="toggleComplete(${index})">
                    ${done.includes(index) ? "✓ Completed" : "Mark Complete"}
                </button>

                <button onclick="nextStep()" ${index===steps.length-1?"disabled":""}>Next →</button>
            </div>
        </div>
    `;

    document.body.style.overflow = "hidden";
}

function closeLesson(){
    const box = document.getElementById("lessonViewer");
    if(box) box.remove();
    document.body.style.overflow = "";
}

function toggleComplete(index){
    let done = completed();

    if(done.includes(index)){
        done = done.filter(x => x !== index);
    }else{
        done.push(index);
    }

    saveCompleted(done);
    updateProgress();
    renderSteps(search ? search.value : "");
    openLesson(index);
}

function previousStep(){
    if(currentStep > 0) openLesson(currentStep - 1);
}

function nextStep(){
    if(currentStep < steps.length - 1) openLesson(currentStep + 1);
}

if(search){
    search.addEventListener("input", e => renderSteps(e.target.value));
}

document.addEventListener("keydown", e=>{
    if(e.key === "Escape") closeLesson();
    if(e.key === "ArrowRight" && document.getElementById("lessonViewer")) nextStep();
    if(e.key === "ArrowLeft" && document.getElementById("lessonViewer")) previousStep();
});

renderSteps();
updateProgress();
