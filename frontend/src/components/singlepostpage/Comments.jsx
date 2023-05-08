import { useState, useEffect, useRef } from "react";
import profilImage from "../../assets/images/profil image.webp";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Comments = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    if (textAreaValue !== "") {
      console.log("render");
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [textAreaValue]);

  const handleShowButton = () => {
    setShowButton(true);
  };

  return (
    <div className="mx-auto my-10 max-w-3xl space-y-6 rounded-lg bg-white p-8">
      <h1 className="mb-10 font-poppins font-black">Top comments (11)</h1>
      <form action="">
        <div className="flex space-x-4">
          <img
            src={profilImage}
            alt=""
            className="h-9 w-9 rounded-full border hover:border-zinc-600"
          />
          {/* <SunEditor
          placeholder="Add to the discussion"
          autoFocus={true}
          height="auto"
          setDefaultStyle="font-family: jetBrains Mono; font-size: 16px; border-radius: 10px;"
          setOptions={{
            buttonList: [
              [
                "bold",
                "italic",
                "link",
                "list",
                "blockquote",
                "paragraphStyle",
                "image",
              ],
            ],
            resizingBar: false,
          }}
          onChange={props.handleOnChangeText}
          defaultValue={props.defaultValue}
        /> */}
          <div className="flex w-full flex-col">
            <textarea
              className="w-full rounded-lg border border-gray-200 p-4"
              name=""
              id=""
              rows="3"
              placeholder="Add to the discussion"
              onFocus={handleShowButton}
              onChange={(e) => {
                setTextAreaValue(e.target.value);
              }}
            ></textarea>
            {showButton && (
              <button
                type="submit"
                className="mt-3 block w-min rounded-md bg-violet-600 px-4 py-2 text-sm text-white disabled:opacity-50"
                disabled={disableButton}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>

      <div className="flex space-x-4">
        <img
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <p>
            While it depends, I think it's always worth considering erring on
            the side of the intents of the platform, and what the browser
            expects, prefers, and is developing.
          </p>
          <p>
            I've always thought proper native CSS (with compilers and libraries
            as needed) is still the right default approach.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <p>
            While it depends, I think it's always worth considering erring on
            the side of the intents of the platform, and what the browser
            expects, prefers, and is developing.
          </p>
          <p>
            I've always thought proper native CSS (with compilers and libraries
            as needed) is still the right default approach.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <p>
            While it depends, I think it's always worth considering erring on
            the side of the intents of the platform, and what the browser
            expects, prefers, and is developing.
          </p>
          <p>
            I've always thought proper native CSS (with compilers and libraries
            as needed) is still the right default approach.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <p>
            While it depends, I think it's always worth considering erring on
            the side of the intents of the platform, and what the browser
            expects, prefers, and is developing.
          </p>
          <p>
            I've always thought proper native CSS (with compilers and libraries
            as needed) is still the right default approach.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <p>
            While it depends, I think it's always worth considering erring on
            the side of the intents of the platform, and what the browser
            expects, prefers, and is developing.
          </p>
          <p>
            I've always thought proper native CSS (with compilers and libraries
            as needed) is still the right default approach.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <p>
            While it depends, I think it's always worth considering erring on
            the side of the intents of the platform, and what the browser
            expects, prefers, and is developing.
          </p>
          <p>
            I've always thought proper native CSS (with compilers and libraries
            as needed) is still the right default approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
