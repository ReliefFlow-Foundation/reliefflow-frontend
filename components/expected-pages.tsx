export function ExpectedPages() {
  return (
    <section className="section site-map" id="site-map">
      <span className="tag">Site map</span>
      <h2>Expected pages (delivery backlog)</h2>
      <p style={{ color: "var(--muted)", maxWidth: 720 }}>
        This table is the contract between product and engineering. Routes marked scaffold ship as
        placeholders; planned routes are tracked for sprint planning.
      </p>
      <div style={{ overflowX: "auto", marginTop: 16 }}>
        <table>
          <thead>
            <tr>
              <th>Route</th>
              <th>Purpose</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr key="/"><td><code>/</code></td><td>Landing + site map</td><td>Scaffold</td></tr>
            <tr key="/programs"><td><code>/programs</code></td><td>Campaign design and treasury</td><td>Planned</td></tr>
            <tr key="/disbursement"><td><code>/disbursement</code></td><td>Tranche scheduling and rails</td><td>Planned</td></tr>
            <tr key="/integrity"><td><code>/integrity</code></td><td>Fraud challenges and appeals</td><td>Planned</td></tr>
            <tr key="/impact"><td><code>/impact</code></td><td>Donor transparency dashboards</td><td>Planned</td></tr>
            <tr key="/roadmap"><td><code>/roadmap</code></td><td>Field rollout plan</td><td>Scaffold</td></tr>
            <tr key="/docs"><td><code>/docs</code></td><td>Humanitarian ops playbook</td><td>Scaffold</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
