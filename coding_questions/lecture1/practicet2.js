//! 4.write a function which will tell what kind of triangle is it 
//? all three sided equal : Equilateral Triangle
//? two sides are equal : isosceles triangle
//? If no sides are equal : scalene

//todo : using my way 
// function typeOfTriangle(n1,n2,n3){
//     if(n1==n2 && n2==n3) return "Equilateral"
//     if(n1==n2 || n2==n3 || n1==n3) return "isosceles"
//     return "scalene"
// }
// console.log(typeOfTriangle(10,10,10));
// console.log(typeOfTriangle(10,10,20));
// console.log(typeOfTriangle(10,30,20));

//todo :  this is the give array from this you have to get a project in which employee is enrolled
const projects = [
    {
        projectId: 1,
        projectName: "Enterprise Resource Planning",
        teams: [
            {
                teamId: 1,
                managerId: "6",
                managerName: "Dinesh K",
                isManagerBillable: true,
                managerAllocation: 50,

                teamLeadId: "9",
                teamLeadName: "Vasanth S",
                isTeamLeadBillable: false,
                teamLeadAllocation: 50,

                teamMembers: [
                    {
                        teamMemberId: 1,
                        employeeId: "11",
                        employeeName: "Richitha M",
                        role: "Member",
                        allocationPercentage: 50,
                    },
                    {
                        teamMemberId: 2,
                        employeeId: "12",
                        employeeName: "Arun S",
                        role: "Member",
                        allocationPercentage: 50,
                    },
                ],
            },
        ],
    },
    {
        projectId: 2,
        projectName: "HR Management System",
        teams: [
            {
                teamId: 2,
                managerId: "8",
                managerName: "Priya R",
                isManagerBillable: true,
                managerAllocation: 60,

                teamLeadId: "10",
                teamLeadName: "Karthik N",
                isTeamLeadBillable: true,
                teamLeadAllocation: 40,

                teamMembers: [
                    {
                        teamMemberId: 3,
                        employeeId: "13",
                        employeeName: "Sneha P",
                        role: "Member",
                        allocationPercentage: 100,
                    },
                ],
            },
        ],
    },
    {
        projectId: 3,
        projectName: "Social Media App",
        teams: [
            {
                teamId: 3,
                managerId: "8",
                managerName: "Ramesh L",
                isManagerBillable: false,
                managerAllocation: 0,

                teamLeadId: "11",
                teamLeadName: "Anjali S",
                isTeamLeadBillable: true,
                teamLeadAllocation: 70,

                teamMembers: [
                    {
                        teamMemberId: 4,
                        employeeId: "14",
                        employeeName: "Vikram R",
                        role: "Member",
                        allocationPercentage: 30,
                    },
                    {
                        teamMemberId: 5,
                        employeeId: "15",
                        employeeName: "Megha K",
                        role: "Member",
                        allocationPercentage: 70,
                    },
                ],
            },
        ],
    },
];

const targetId = "8"
const r = projects.filter((cur) =>
    cur.teams.some((team) =>
        team.teamLeadId === targetId || team.managerId === targetId ||
        team.teamMembers.some((teamM) => teamM.employeeId === targetId)
    )
).map((cur)=>cur.projectId)
console.log(r)