import PythonImage from '../assets/images/Praveen_Python.jpeg';
import SqlImage from '../assets/images/Sql.png';

export const certificates = [
  {
    id: "python",
    title: "Python Certification",
    issuer: "Cybernaut Ed Tech Private Limited",
    date: "",
    category: "Python",
    badge: "Verified Credential",
    description: "Industry credential recognizing proficiency in Python development, object-oriented programming, data structures, automation scripts, and problem solving.",
    skillsCovered: ["Python Core", "Data Structures", "Automation", "Modular Scripting", "Exception Handling"],
    credentialId: "CYBERNAUT-PY-2026",
    verificationUrl: "#",
    image: PythonImage,
    color: "#FACC15"
  },
  {
    id: "sql",
    title: "SQL Certification",
    issuer: "HackerRank",
    date: "",
    category: "SQL",
    badge: "Skill Verified",
    description: "Standardized credential assessing mastery over relational database querying, multi-table joins, subqueries, group by aggregations, and query optimization.",
    skillsCovered: ["Relational Queries", "Complex Joins", "Aggregations", "Subqueries", "Schema Manipulation"],
    credentialId: "HACKERRANK-SQL-VERIFIED",
    verificationUrl: "#",
    image: SqlImage,
    color: "#60A5FA"
  }
];
