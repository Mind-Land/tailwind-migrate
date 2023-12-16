import PropTypes from "prop-types";
import { Label, Radio } from "flowbite-react";

const RadioQuestion = ({ Question, QuestionType, Id, onChange }) => {
  return (
    <>
      <legend className="mt-4 dark:text-white">{Question}</legend>
      <div className="flex items-center gap-2">
        <Radio
          onChange={() => onChange(0)}
          id={`${Id}-tp`}
          name={QuestionType}
          value="tidak pernah"
        />
        <Label htmlFor={`${Id}-tp`}>Tidak Pernah</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          onChange={() => onChange(1)}
          id={`${Id}-bp`}
          name={QuestionType}
          value="beberapa hari"
        />
        <Label htmlFor={`${Id}-bp`}>Beberapa Hari</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          onChange={() => onChange(2)}
          id={`${Id}-sb`}
          name={QuestionType}
          value="sebagian besar hari"
        />
        <Label htmlFor={`${Id}-sb`}>Sebagian Besar Hari</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          onChange={() => onChange(3)}
          id={`${Id}-hs`}
          name={QuestionType}
          value="hampir setiap hari"
        />
        <Label htmlFor={`${Id}-hs`}>Hampir Setiap Hari </Label>
      </div>
    </>
  );
};

export default RadioQuestion;

RadioQuestion.propTypes = {
  Question: PropTypes.string.isRequired,
  QuestionType: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
