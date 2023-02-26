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
                }
                h1{
                    width: 100%;
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