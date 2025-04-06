const EmergencyContacts = ({ expanded = false }) => {
  const contacts = [
    { name: 'Local Police', number: '100', type: 'emergency' },
    { name: 'Ambulance', number: '108', type: 'emergency' },
    { name: 'Fire Department', number: '101', type: 'emergency' },
    { name: 'Disaster Management', number: '1078', type: 'authority' },
    { name: 'Hospital Main', number: '1800-123-456', type: 'medical' },
  ];

  return (
    <div className={`rounded-xl shadow-sm border bg-white/10 backdrop-blur-md border-white/10 ${
      expanded ? 'p-6' : 'p-4'
    }`}>
      <h3 className={`font-semibold text-white ${expanded ? 'text-lg mb-4' : 'text-md mb-2'}`}>
        Emergency Contacts
      </h3>
      
      <div className="space-y-3">
        {contacts.map((contact, index) => (
          <div key={index} className="p-3 rounded-lg flex justify-between items-center bg-white/5 border border-white/10">
            <div>
              <p className="font-medium text-white">{contact.name}</p>
              <p className="text-sm text-white/60">
                {contact.number}
              </p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              contact.type === 'emergency'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : contact.type === 'medical'
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}>
              {contact.type}
            </span>
          </div>
        ))}
      </div>
      
      {expanded && (
        <div className="mt-4 flex justify-between">
          <button className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 border border-white/10">
            Import Contacts
          </button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white transition-colors duration-200">
            + Add New Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default EmergencyContacts;
