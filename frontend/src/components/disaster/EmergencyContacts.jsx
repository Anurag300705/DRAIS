const EmergencyContacts = ({ darkMode, expanded = false }) => {
    const contacts = [
      { name: 'Local Police', number: '100', type: 'emergency' },
      { name: 'Ambulance', number: '108', type: 'emergency' },
      { name: 'Fire Department', number: '101', type: 'emergency' },
      { name: 'Disaster Management', number: '1078', type: 'authority' },
      { name: 'Hospital Main', number: '1800-123-456', type: 'medical' },
    ];
  
    return (
      <div className={`rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'} ${
        expanded ? 'p-6' : 'p-4'
      }`}>
        <h3 className={`font-semibold ${expanded ? 'text-lg mb-4' : 'text-md mb-2'}`}>
          Emergency Contacts
        </h3>
        
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className={`p-3 rounded-lg flex justify-between items-center ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {contact.number}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                contact.type === 'emergency'
                  ? darkMode 
                    ? 'bg-red-900 text-red-300' 
                    : 'bg-red-100 text-red-800'
                  : contact.type === 'medical'
                    ? darkMode 
                      ? 'bg-green-900 text-green-300' 
                      : 'bg-green-100 text-green-800'
                    : darkMode 
                      ? 'bg-blue-900 text-blue-300' 
                      : 'bg-blue-100 text-blue-800'
              }`}>
                {contact.type}
              </span>
            </div>
          ))}
        </div>
        
        {expanded && (
          <div className="mt-4 flex justify-between">
            <button className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}>
              Import Contacts
            </button>
            <button className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}>
              + Add New Contact
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default EmergencyContacts;