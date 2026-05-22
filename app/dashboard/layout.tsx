import { memo } from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default memo(DashboardLayout);
