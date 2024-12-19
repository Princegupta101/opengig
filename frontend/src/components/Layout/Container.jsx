const Container = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default Container;
  