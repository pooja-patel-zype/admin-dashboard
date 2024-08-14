import { DedupeAccepted } from "./DedupeAccepted";
import { DedupeLeads } from "./DedupeLeads";
import { DedupeRejected } from "./DedupeRejected";
import { PreApproval } from "./PreApproval";
import { styles } from "./styles";

const Spacer = () => <span style={{ width: '1em' }} />;

export const Dashboard = () => {
    return (
          <>
            <div style={styles.dashboardRow}>
              <DedupeLeads/>
              <Spacer />
              <DedupeAccepted/>
              <Spacer />
              <DedupeRejected/>
              <Spacer />
              <PreApproval/>
            </div>
        </>
    );
};

export default Dashboard;