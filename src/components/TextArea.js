
import React, { useState, useEffect, useRef } from 'react'
import Alert from './Alert';

export default function TextArea(props) {
    const [Text, setText] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [copyAlert, setcopyAlert] = useState(false);
    const [FillAlert, setFillAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);



    const handleUpClick = () => {

        handleCaseChange(true);
    }
    const handleLOWClick = () => {
        handleCaseChange(false);
    }
    const handleCaseChange = (changeToUpperCase) => {
        if (Text.trim() === "") {
            setFillAlert(true);
        } else {
            const newText = changeToUpperCase ? Text.toUpperCase() : Text.toLowerCase();
            setText(newText);
            setShowSuccessAlert(true);
        }
    };
    const handleClearClick = () => {

        const newText = "";
        setText(newText,);
        setShowAlert(true);

    }
    const handleAlertClose = () => {
        setShowAlert(false);

    };
    const handleSuccessAlertClose = () => {
        setShowSuccessAlert(false);
    };

    useEffect(() => {
        if (showAlert) {
            const alertTimeout = setTimeout(() => {
                setShowAlert(false);
            }, 2000); // 3 seconds in milliseconds

            // Cleanup function to clear the timeout when component unmounts or showAlert changes
            return () => clearTimeout(alertTimeout);
        }
    }, [showAlert]);
    useEffect(() => {
        if (showSuccessAlert) {
            const successAlertTimeout = setTimeout(() => {
                setShowSuccessAlert(false);
            }, 3000); // 3 seconds in milliseconds

            return () => clearTimeout(successAlertTimeout);
        }
    }, [showSuccessAlert]);

    useEffect(() => {
        if (FillAlert) {
            const successAlertTimeout = setTimeout(() => {
                setFillAlert(false);
            }, 3000); // 3 seconds in milliseconds

            return () => clearTimeout(successAlertTimeout);
        }
    }, [FillAlert]);
    useEffect(() => {
        if (copyAlert) {
            const successAlertTimeout = setTimeout(() => {
                setcopyAlert(false);
            }, 2000); // 3 seconds in milliseconds

            return () => clearTimeout(successAlertTimeout);
        }
    }, [copyAlert]);

    const textAreaRef = useRef(null);

    const handleCopyClick = () => {
        if (Text.trim() !== "") {
            textAreaRef.current.select();
            document.execCommand('copy');
            setcopyAlert(true);

        } else {
            setFillAlert(true); // Show "Please give something to convert" alert
        }
    };
    const handleOnChange = (event) => {
        setText(event.target.value)
    }



    return (
        < >
            {copyAlert && (
                <Alert
                    massage="Text copied successfully!!"
                    onClose={handleSuccessAlertClose}
                />
            )}
            {showSuccessAlert && (
                <Alert
                    massage="Text converted successfully!"
                    onClose={handleSuccessAlertClose}
                />
            )}
            {FillAlert && (
                <Alert
                    massage="Please Enter Text first!"
                    onClose={handleSuccessAlertClose}
                />
            )}
            {showAlert && (
                <Alert
                    massage="Text cleared successfully!"
                    onClose={handleAlertClose}
                />
            )}
            <div className='flex flex-col  space-y-3 items-center '>
                <div className=" space-y-4 w-9/12">

                    <h1 className="text-2xl" >{props.heading}</h1>

                    <textarea
                        ref={textAreaRef}
                        id="message"
                        value={Text}
                        rows={16}
                        onChange={handleOnChange}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        defaultValue={""}

                    />

                    <div>
                        <div className="flex justify-between">
                            <div className="flex-1">
                                <button
                                    type="button"
                                    onClick={handleUpClick}
                                    className="text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Change to UpperCase
                                </button>
                                <button
                                    type="button"
                                    onClick={handleLOWClick}
                                    className="text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Change to LowerCase
                                </button>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    onClick={handleCopyClick}
                                    class="text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Copy To Clipboard
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClearClick}
                                    class="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Clear Text
                                </button>
                            </div>
                            <div>
                            </div>

                        </div>
                        <h1 className="text-2xl text-left">Your Text summary</h1>
                        <p>{Text.split(" ").length} words, {Text.length} characters</p>
                        <p>{0.008 * Text.split(" ").length} minutes read</p>
                    </div>
                </div>

            </div>

        </>

    )
}
