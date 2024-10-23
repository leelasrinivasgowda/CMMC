var margin = { top: 20, right: 120, bottom: 20, left: 120 },
    width = 960 - margin.right - margin.left,
    height = 1000 - margin.top - margin.bottom;

var i = 0, duration = 750, root;

var tree = d3.layout.tree().size([height, width]);

var diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#tree-container").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var treeData = {
  name: "CMMC Framework",
  children: [
    {
      name: "3.1 Access Control",
      children: [
        { 
        name: "03.01.01 Account Management",
         children: [
        { name: "03.01.01 Server"},
         ],
        },
        { name: "03.01.02 Access Enforcement" },
        { name: "03.01.03 Information Flow Enforcement" },
        { name: "03.01.04 Separation of Duties" },
        { name: "03.01.05 Least Privilege" },
        { name: "03.01.06 Least Privilege – Privileged Accounts" },
        { name: "03.01.07 Least Privilege – Privileged Functions" },
        { name: "03.01.08 Unsuccessful Logon Attempts" },
        { name: "03.01.09 System Use Notification" },
        { name: "03.01.10 Device Lock" },
        { name: "03.01.11 Session Termination" },
        { name: "03.01.12 Remote Access" },
        { name: "03.01.16 Wireless Access" },
        { name: "03.01.18 Access Control for Mobile Devices" },
        { name: "03.01.20 Use of External Systems" },
        { name: "03.01.22 Publicly Accessible Content" },
      ],
    },
    {
      name: "3.2 Awareness and Training",
      children: [
        { name: "03.02.01 Literacy Training and Awareness" },
        { name: "03.02.02 Role-Based Training" },
      ],
    },
    {
      name: "3.3 Audit and Accountability",
      children: [
        { name: "03.03.01 Event Logging" },
        { name: "03.03.02 Audit Record Content" },
        { name: "03.03.03 Audit Record Generation" },
        { name: "03.03.04 Response to Audit Logging Process Failures" },
        { name: "03.03.05 Audit Record Review, Analysis, and Reporting" },
        { name: "03.03.06 Audit Record Reduction and Report Generation" },
        { name: "03.03.07 Time Stamps" },
        { name: "03.03.08 Protection of Audit Information" },
      ],
    },
    {
      name: "3.4 Configuration Management",
      children: [
        { name: "03.04.01 Baseline Configuration" },
        { name: "03.04.02 Configuration Settings" },
        { name: "03.04.03 Configuration Change Control" },
        { name: "03.04.04 Impact Analyses" },
        { name: "03.04.05 Access Restrictions for Change" },
        { name: "03.04.06 Least Functionality" },
        { name: "03.04.08 Authorized Software – Allow by Exception" },
        { name: "03.04.10 System Component Inventory" },
        { name: "03.04.11 Information Location" },
        { name: "03.04.12 System and Component Configuration for High-Risk Areas" },
      ],
    },
    {
      name: "3.5 Identification and Authentication",
      children: [
        { name: "03.05.01 User Identification and Authentication" },
        { name: "03.05.02 Device Identification and Authentication" },
        { name: "03.05.03 Multi-Factor Authentication" },
        { name: "03.05.04 Replay-Resistant Authentication" },
        { name: "03.05.05 Identifier Management" },
        { name: "03.05.07 Password Management" },
        { name: "03.05.11 Authentication Feedback" },
        { name: "03.05.12 Authenticator Management" },
      ],
    },
    {
      name: "3.6 Incident Response",
      children: [
        { name: "03.06.01 Incident Handling" },
        { name: "03.06.02 Incident Monitoring, Reporting, and Response Assistance" },
        { name: "03.06.03 Incident Response Testing" },
        { name: "03.06.04 Incident Response Training" },
        { name: "03.06.05 Incident Response Plan" },
      ],
    },
    {
      name: "3.7 Maintenance",
      children: [
        { name: "03.07.04 Maintenance Tools" },
        { name: "03.07.05 Nonlocal Maintenance" },
        { name: "03.07.06 Maintenance Personnel" },
      ],
    },
    {
      name: "3.8 Media Protection",
      children: [
        { name: "03.08.01 Media Storage" },
        { name: "03.08.02 Media Access" },
        { name: "03.08.03 Media Sanitization" },
        { name: "03.08.04 Media Marking" },
        { name: "03.08.05 Media Transport" },
        { name: "03.08.07 Media Use" },
        { name: "03.08.09 System Backup – Cryptographic Protection" },
      ],
    },
    {
      name: "3.9 Personnel Security",
      children: [
        { name: "03.09.01 Personnel Screening" },
        { name: "03.09.02 Personnel Termination and Transfer" },
      ],
    },
    {
      name: "3.10 Physical Protection",
      children: [
        { name: "03.10.01 Physical Access Authorizations" },
        { name: "03.10.02 Monitoring Physical Access" },
        { name: "03.10.06 Alternate Work Site" },
        { name: "03.10.07 Physical Access Control" },
        { name: "03.10.08 Access Control for Transmission" },
      ],
    },
    {
      name: "3.11 Risk Assessment",
      children: [
        { name: "03.11.01 Risk Assessment" },
        { name: "03.11.02 Vulnerability Monitoring and Scanning" },
        { name: "03.11.04 Risk Response" },
      ],
    },
    {
      name: "3.12 Security Assessment and Monitoring",
      children: [
        { name: "03.12.01 Security Assessment" },
        { name: "03.12.02 Plan of Action and Milestones" },
        { name: "03.12.03 Continuous Monitoring" },
        { name: "03.12.05 Information Exchange" },
      ],
    },
    {
      name: "3.13 System and Communications Protection",
      children: [
        { name: "03.13.01 Boundary Protection" },
        { name: "03.13.04 Information in Shared System Resources" },
        { name: "03.13.06 Network Communications – Deny by Default – Allow by Exception" },
        { name: "03.13.08 Transmission and Storage Confidentiality" },
        { name: "03.13.09 Network Disconnect" },
        { name: "03.13.10 Cryptographic Key Establishment and Management" },
        { name: "03.13.11 Cryptographic Protection" },
        { name: "03.13.12 Collaborative Computing Devices and Applications" },
        { name: "03.13.13 Mobile Code" },
        { name: "03.13.15 Session Authenticity" },
      ],
    },
    {
      name: "3.14 System and Information Integrity",
      children: [
        { name: "03.14.01 Flaw Remediation" },
        { name: "03.14.02 Malicious Code Protection" },
        { name: "03.14.03 Security Alerts, Advisories, and Directives" },
        { name: "03.14.06 System Monitoring" },
        { name: "03.14.08 Information Management and Retention" },
      ],
    },
    {
      name: "3.15 Planning",
      children: [
        { name: "03.15.01 Policy and Procedures" },
        { name: "03.15.02 System Security Plan" },
        { name: "03.15.03 Rules of Behavior" },
      ],
    },
    {
      name: "3.16 System and Services Acquisition",
      children: [
        { name: "03.16.01 Security Engineering Principles" },
        { name: "03.16.02 Unsupported System Components" },
        { name: "03.16.03 External System Services" },
      ],
    },
    {
      name: "3.17 Supply Chain Risk Management",
      children: [
        { name: "03.17.01 Supply Chain Risk Management Plan" },
        { name: "03.17.02 Acquisition Strategies, Tools, and Methods" },
        { name: "03.17.03 Supply Chain Requirements and Processes" },
      ],
    },
  ],
};

root = treeData;
root.x0 = height / 2;
root.y0 = 0;

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

root.children.forEach(collapse);
update(root);

function update(source) {
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  nodes.forEach(function(d) { d.y = d.depth * 180; });

  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle").attr("r", 4.5).style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text").style("fill-opacity", 1);

  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle").attr("r", 1e-6);

  nodeExit.select("text").style("fill-opacity", 1e-6);

  var link = svg.selectAll("path.link").data(links, function(d) { return d.target.id; });

  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = { x: source.x0, y: source.y0 };
        return diagonal({ source: o, target: o });
      });

  link.transition().duration(duration).attr("d", diagonal);

  link.exit().transition().duration(duration).attr("d", function(d) {
    var o = { x: source.x, y: source.y };
    return diagonal({ source: o, target: o });
  }).remove();

  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}
