import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Provide me with the list of insurances that our practice is not in network?",
        value: "Provide me with the list of insurances that our practice is not in network?"
    },
    {
        text: "What coverages are included in the patient's insurance plan?",
        value: "What coverages are included in the Mrs. McCormick's insurance plan?"
    },
    { text: "What is the name of the patient's insurance plan?", value: "What is the name of the Mrs. McCormick's insurance plan?" },
    { text: "Is the patient's insurance active?", value: "Is the Mrs. McCormick's insurance active?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
