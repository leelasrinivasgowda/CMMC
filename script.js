var margin = { top: 20, right: 120, bottom: 20, left: 120 },
    width = 960 - margin.right - margin.left,
    height = 2000 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree().size([height, width]);

var diagonal = d3.svg.diagonal().projection(function (d) {
    return [d.y, d.x];
});

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
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Network Devices" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.01.02 Access Enforcement",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                        { name: "Security Systems" },
                        { name: "Data Assets" },
                    ]
                },
                {
                    name: "03.01.03 Information Flow Enforcement",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                    ]
                },
                {
                    name: "03.01.04 Separation of Duties",
                    children: [
                        { name: "Servers" },
                        { name: "Human Assets" },
                    ]
                },
                {
                    name: "03.01.05 Least Privilege",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                        { name: "Security Systems" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.01.06 Least Privilege – Privileged Accounts",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                    ]
                },
                {
                    name: "03.01.07 Least Privilege – Privileged Functions",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Security Systems" },
                    ]
                },
                {
                    name: "03.01.08 Unsuccessful Logon Attempts",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.01.09 System Use Notification",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.01.10 Device Lock",
                    children: [
                        { name: "Servers" },
                        { name: "End-User Devices" },
                        { name: "Workstations" },
                    ]
                },
                {
                    name: "03.01.11 Session Termination",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.01.12 Remote Access",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                        { name: "Cloud Infrastructure" },
                    ]
                },
                {
                    name: "03.01.18 Access Control for Mobile Devices",
                    children: [
                        { name: "Mobile Devices" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.01.20 Use of External Systems",
                    children: [
                        { name: "External Systems" },
                        { name: "Cloud Infrastructure" },
                    ]
                },
                {
                    name: "03.01.22 Publicly Accessible Content",
                    children: [
                        { name: "Public Servers" },
                        { name: "Web Services" },
                    ]
                },
            ]
        },
        {
            name: "3.2 Awareness and Training",
            children: [
                {
                    name: "03.02.01 Literacy Training and Awareness",
                    children: [
                        { name: "Human Assets" },
                        { name: "Workstations" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.02.02 Role-Based Training",
                    children: [
                        { name: "Human Assets" },
                        { name: "Workstations" },
                        { name: "End-User Devices" },
                        { name: "Security Systems" },
                    ]
                },
            ]
        },
        {
            name: "3.3 Audit and Accountability",
            children: [
                {
                    name: "03.03.01 Event Logging",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Network Devices" },
                        { name: "Security Systems" },
                    ]
                },
                {
                    name: "03.03.02 Audit Record Content",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Network Devices" },
                    ]
                },
                {
                    name: "03.03.03 Audit Record Generation",
                    children: [
                        { name: "Servers" },
                        { name: "Security Systems" },
                        { name: "Cloud Infrastructure" },
                    ]
                },
                {
                    name: "03.03.05 Audit Record Review, Analysis, and Reporting",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Security Systems" },
                    ]
                },
            ]
        },
        {
            name: "3.4 Configuration Management",
            children: [
                {
                    name: "03.04.01 Baseline Configuration",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                        { name: "Workstations" },
                    ]
                },
                {
                    name: "03.04.02 Configuration Settings",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Storage Devices" },
                    ]
                },
                {
                    name: "03.04.03 Configuration Change Control",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                    ]
                },
                {
                    name: "03.04.05 Access Restrictions for Change",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                    ]
                },
            ]
        },
        {
            name: "3.5 Identification and Authentication",
            children: [
                {
                    name: "03.05.01 User Identification and Authentication",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.05.02 Device Identification and Authentication",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                        { name: "End-User Devices" },
                    ]
                },
                {
                    name: "03.05.03 Multi-Factor Authentication",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                    ]
                },
            ]
        },
        {
            name: "3.6 Incident Response",
            children: [
                {
                    name: "03.06.01 Incident Handling",
                    children: [
                        { name: "Servers" },
                        { name: "Network Devices" },
                    ]
                },
                {
                    name: "03.06.02 Incident Monitoring, Reporting, and Response Assistance",
                    children: [
                        { name: "Servers" },
                        { name: "Workstations" },
                        { name: "Cloud Infrastructure" },
                    ]
                },
                {
                    name: "03.06.03 Incident Response Testing",
                    children: [
                        { name: "Servers" },
                        { name: "Security Systems" },
                    ]
                },
            ]
        },
        {
            name: "3.7 Maintenance",
            children: [
                {
                    name: "03.07.04 Maintenance Tools",
                    children: [
                        { name: "Maintenance Tools" },
                        { name: "Servers" },
                    ]
                },
                {
                    name: "03.07.05 Nonlocal Maintenance",
                    children: [
                        { name: "Nonlocal Tools" },
                        { name: "Cloud Infrastructure" },
                    ]
                },
            ]
        },
        {
            name: "3.8 Media Protection",
            children: [
                {
                    name: "03.08.01 Media Storage",
                    children: [
                        { name: "Storage Devices" },
                    ]
                },
                {
                    name: "03.08.02 Media Transport",
                    children: [
                        { name: "Physical Media" },
                        { name: "Storage Devices" },
                    ]
                },
                {
                    name: "03.08.03 Media Sanitization",
                    children: [
                        { name: "Storage Devices" },
                    ]
                },
            ]
        },
        // Add other controls as necessary for the full framework...
    ]
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

    nodes.forEach(function (d) { d.y = d.depth * 180; });

    var node = svg.selectAll("g.node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("text")
        .attr("x", function (d) { return d.children || d._children ? -10 : 10; })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
        .text(function (d) { return d.name; })
        .style("fill-opacity", 1e-6);

    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 4.5)
        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    var link = svg.selectAll("path.link")
        .data(links, function (d) { return d.target.id; });

    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
        });

    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
        })
        .remove();

    nodes.forEach(function (d) {
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
