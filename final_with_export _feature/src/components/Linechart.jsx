import { Card, LineChart, Title } from "@tremor/react";
import { useState } from "react";

const Linechart = (props) => {
  const [value, setValue] = useState(null);
  return (
    <div className="m-4">
      <Card>
        <Title>Closed Pull Requests</Title>
        <LineChart
          className="h-72 mt-4"
          data={props.data}
          index="date"
          categories={["student_weight", "food_weight", "student_height"]}
          colors={["indigo", "green", "red"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          connectNulls={true}
        />
      </Card>
      {/* <pre>{JSON.stringify(value)}</pre> */}
    </div>
  );
};

export default Linechart;