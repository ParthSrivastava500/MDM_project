import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { useContext } from "react";
import { StudentContext } from "../Context";
import { CSVLink } from "react-csv";

const SearchSelectComp = (props) => {
    const students = props.data;
    const particular_student = props.student.student_metrics;
    const context = useContext(StudentContext);
    return (
        <div className="flex m-4 ">
            <div className="my-auto mx-3">
                <h4 className="text-white">Search or Select Student:</h4>
            </div>
            <div className="max-w-sm space-y-6">
                <SearchSelect value={context.value} onValueChange={context.setValue} enableClear={false} placeholder="Search or Select">
                    {students.map((student) => (
                        <SearchSelectItem key={student.id} value={student.id}>
                            {student.name}
                        </SearchSelectItem>
                    ))}
                </SearchSelect>
            </div>
            <div className="ml-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded-md">
                    <CSVLink data={particular_student} filename={`${props.student.name}_${props.student.roll}_(${props.student.class}_${props.student.section}).csv`}>Export Data</CSVLink>
                </button>
            </div>
        </div>


    );
}

export default SearchSelectComp