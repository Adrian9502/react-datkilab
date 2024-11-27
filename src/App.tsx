import Header from "./components/Header"
import React, { useState } from 'react';
import { Copy } from 'lucide-react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [buttonText, setButtonText] = useState('Copy!');
  const handleReverse = () => {
    setOutputText(
      inputText
        .split(' ') // Split the sentence into words
        .map(word => word.split('').reverse().join('')) // Reverse each word
        .join(' ') // Join the reversed words back into a sentence
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setButtonText('Copied!'); // Change button text to "Copied!"

    // After 2 seconds, revert the button text back to "Copy!"
    setTimeout(() => {
      setButtonText('Copy!');
    }, 2000);
  };
  return (
    <main className="h-[100vh] bg-[#0f0e17] overflow-auto">
      <Header />
      <section className="h-screen flex items-center justify-center p-4">
        {/* Centered div */}
        <div className="flex flex-col sm:flex-row sm:max-w-full mt-36 sm:mt-0 mb-12 gap-5 ">
          <div className="bg-orange-500/90 rounded-2xl sm:px-10 px-5 flex flex-col sm:max-w-[50%] items-center py-5">
            <img src="/main-logo.png" alt="Datkilab Logo" className="w-56 sm:w-auto" />
            <span style={{fontFamily: "Jua"}} className="sm:text-2xl text-lg text-orange-100 sm:mt-16 mt-5">
            Flip your words and mess with your friends! <br /> <br /> Watch your text get reversed. <br /> <br /> It's a fun way to confuse your group chats and have a laugh!
            </span>
          </div>
          <div className="w-full max-w-md bg-slate-200 rounded-2xl gap-2 flex flex-col shadow-lg p-6">
            <label htmlFor="text" className="text-orange-500 text-lg">Enter words to flip!</label>
            <textarea id='text'
              className="w-full h-32 p-2 mb-4 border-2 border-orange-500 rounded resize-none text-slate-950 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="retnE ruoy txet ereh..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
    
            <button
              className="w-full bg-[#ff8906] text-white py-2 rounded hover:bg-[#ff7b00] transition-colors mb-4"
              onClick={handleReverse}
              disabled={!inputText.trim()}
            >
              Datkilab
            </button>
    
           
              <div className="flex flex-col gap-3">
              <span className="text-orange-500 text-lg">Copy below!</span>
                <div className="w-full overflow-auto p-2 border-2 border-orange-500 rounded bg-gray-50 min-h-[120px] max-h-[120px] break-words">
                  {outputText}
                </div>
                <button
                  onClick={handleCopy}
                  disabled={!outputText}
                  className="bg-[#ff8906] text-white py-2 rounded transition-colors flex items-center justify-center gap-3 hover:bg-[#ff7b00]"
                  title="Copy to clipboard"
                >
                 {buttonText} <Copy size={20} />
                </button>
              </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
