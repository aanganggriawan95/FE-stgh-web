import { Card } from "flowbite-react";

const companies = [
    { id: 1, name: 'Company 1', logo: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Company 2', logo: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Company 3', logo: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Company 4', logo: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Company 5', logo: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Company 6', logo: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Company 7', logo: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Company 8', logo: 'https://via.placeholder.com/150' },
  ];
  
  const CompanyGrid = () => {
    return (
      <div className="company-grid">
        {companies.map((company) => (
          <Card key={company.id} title={company.name} className="company-card">
            <img src={company.logo} alt={company.name} className="company-logo" />
          </Card>
        ))}
      </div>
    );
  };
  
  export default CompanyGrid;