import { FormData } from '../types/FormData.type';
import { FormSegmentData, SegmentType } from '../types/FormSegmentData.type';
import { ChoiceData, SelectData } from '../types/SelectableElementData';

function createFormTitle(title: string): string{
    return `
        <h1> ${title} </h1>
    `.trim()
}
function createQuestionHeader(question: string, required: boolean){
    return `
        <div class='question-header'>
            <h2 class='question-title'> ${question} </h2>
            <span style="color: ${required?'rgb(205, 4, 4)':'#3A98B9'}; font-size: 14px;">
                 ${required?'Required':'Optional'} 
            </span>
        </div>
    `.trim();
}

function createChoiceElement(choice: ChoiceData, question: string, required: boolean){
    return `
        <div class='selectable-element-container'>
            <input type='radio' name='${question}' value='${choice.data}' ${required? 'required': ''}>
            <label> ${choice.data} </label>
        </div>
    `.trim()
}
function createSelectElement(select: SelectData, question: string, required: boolean){
    return `
        <div class='selectable-element-container'>
            <input type='checkbox' name='${question}' value='${select.data}' ${required? 'required': ''}>
            <label> ${select.data} </label>
        </div>
    `.trim()
}
function createSelectableElementsQuestionBody(elements: ChoiceData[] | undefined, question: string, type: string, required:boolean): string{
    let HTMLs = elements?.map((element) => {
		return type === 'choice'
			? createChoiceElement(element, question, required)
			: createSelectElement(element, question, required);
	});
    return`
        <div class='selectable-elements-container'>
            ${HTMLs?.join('\n')}
        </div>
    `.trim()
}

function createShortAnswerQuestion(segment: FormSegmentData): string{
    return `
        <div class='question'> 
            ${createQuestionHeader(segment.question, segment.required)}
            <input name='${segment.question}' type='text' class='shortAnswer-answer' placeholder='Type your answer...' ${segment.required? 'required': ''}> 
        </div>
    `.trim()
}
function createParagraphQuestion(segment: FormSegmentData): string{
    return `
        <div class='question'> 
            ${createQuestionHeader(segment.question, segment.required)}
            <textarea name='${segment.question}' placeholder='Type your answer...' ${segment.required? 'required': ''}></textarea>
        </div>
    `.trim()
}
function createMultipleChoiceQuestion (segment: FormSegmentData): string{
    return `
        <div class='question'> 
            ${createQuestionHeader(segment.question, segment.required)}
            ${createSelectableElementsQuestionBody(segment.choices, segment.question, 'choice', segment.required)}
        </div>
    `.trim()
}
function createMultiSelectQuestion (segment: FormSegmentData): string{
    return `
        <div class='question'> 
            ${createQuestionHeader(segment.question, segment.required)}
            ${createSelectableElementsQuestionBody(segment.selects, segment.question, 'select', segment.required)}
        </div>
    `.trim()
}

function createFormBody(segments: FormSegmentData[]){
    let formQuestions : string[] = [];
    segments.forEach(segment => {
        switch(segment.type){
            case SegmentType.shortAnswer: {
                formQuestions.push(createShortAnswerQuestion(segment));
                break;
            }
            case SegmentType.paragraph: {
                formQuestions.push(createParagraphQuestion(segment));
                break;
            }
            case SegmentType.multipleChoice: {
                formQuestions.push(createMultipleChoiceQuestion(segment))
                break;
            }
            case SegmentType.multiSelect: {
                formQuestions.push(createMultiSelectQuestion(segment))
                break;
            }
        }
    });
    return formQuestions.join('\n');
}

export default function createHTMLForm({segments, title}: FormData, targetLink: string): string {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
            <title>${title}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    background-color: #EEEEEE;
                    min-height: 100vh;
                    font-family: 'Roboto', sans-serif;
                    color: #343a40;
                    accent-color: #3A98B9;
                    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(4) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M15 5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5 25H5v30H-5zM-5-15H5v30H-5z'  stroke-width='1' stroke='hsla(259, 100%, 0%, 0.02)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
                }
                h1{
                    width: 100%;
                    border-bottom: 2px solid #3A98B9;
                    padding: 5px;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    align-items: center;
                    justify-content: center;
                    width: 50%;
                    height: 100%;
                    margin: 50px auto;
                }
                input, textarea {
                    border: none;
                    border-bottom: 1px solid #3A98B9;
                    border-radius: 5px;
                    padding: 10px;
                    width: 100%;
                    font-size: 18px;
                    resize: vertical;
                    color: inherit;
                    font-family: inherit;
                }
                input:focus-visible, textarea:focus-visible{
                    outline: none;
                }
                .question {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    background-color: #E8D5C4;
                    padding: 30px;
                    border-radius: 5px;
                }
                .question-header{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                }
                .selectable-elements-container{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .selectable-element-container{
                    display: flex;
                    gap: 20px;
                    font-size: 18px;
                    padding: 10px;
                }
                .selectable-element-container label{
                    flex: 1;
                    border-bottom: 1px solid #3A98B9;
                    padding: 5px;
                }
                .selectable-element-container input{
                    width: fit-content;
                    transform: scale(1.8);
                }
                button[type="submit"] {
                    padding: 12px 18px;
                    border-radius: 5px;
                    border: none;
                    font-size: 18px;
                    background: #3A98B9;
                    font-weight: 700;
                    color: #eeeeee;
                    cursor: pointer;
                    align-self: start;
                    transition: background-color 0.2s linear;
                }   
                button[type="submit"]:hover{
                    background-color: #0051a3;
                }
                @media(max-width: 768px){
                    .form{
                        width: 80%;
                    }
                }
                @media(max-width: 425px){
                    .form{
                        width: 90%;
                    }
                }
                ::-webkit-scrollbar {
                    width: 5px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: #3A98B9;
                    border-radius: 5px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #2f7b96;
                }
            </style>
        </head>
        <body>
            <form action='${targetLink}' method='POST'>  
                ${createFormTitle(title)} 
                ${createFormBody(segments)}
                <button type='submit' title='submit form'> Submit </button>
            </form>
        </body>
        </html>
    `.trim()
}