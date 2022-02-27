import { Flex, Text } from "@chakra-ui/react";

export default function Message({ recipient = "from", children }) {
  if (recipient == "from") {
    return (
      <Flex>
        <div className="from">
          <div className="tail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.88 180.43">
              <path d="M124.92,0c18.47,16.82,38.5,34.06,60.13,51.42,19.4,15.57,38.41,29.9,56.83,43.05,0,0-47.14,89.16-241.88,85.87A239.72,239.72,0,0,0,70.85,123C111.13,75,121.64,23.63,124.92,0Z" />
            </svg>
          </div>
          <Text as="p">{children}</Text>
        </div>
        <style jsx>{`
          .from {
            display: flex;
            align-items: center;
            height: 50px;
            background-color: #e5e5e9;
            margin-left: 1rem;
            padding: 1.5rem;
            color: black;
            border-radius: 60px;
          }

          .tail {
            position: absolute;
            width: 30px;
            margin: -38px;
            padding-top: 26px;
            fill: #e5e5e9;
          }
        `}</style>
      </Flex>
    );
  }

  return (
    <Flex>
      <div className="to">
        <div className="tail">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.88 180.43">
            <path d="M124.92,0c18.47,16.82,38.5,34.06,60.13,51.42,19.4,15.57,38.41,29.9,56.83,43.05,0,0-47.14,89.16-241.88,85.87A239.72,239.72,0,0,0,70.85,123C111.13,75,121.64,23.63,124.92,0Z" />
          </svg>
        </div>
        <Text as="p">{children}</Text>
      </div>
      <style jsx>{`
        .to {
          display: flex;
          align-items: center;
          height: 50px;
          background-color: #1982fc;
          margin-left: 1rem;
          padding: 1.5rem;
          color: white;
          border-radius: 60px;
        }

        .tail {
          position: absolute;
          width: 30px;
          margin: -38px;
          padding-top: 26px;
          fill: #1982fc;
        }
      `}</style>
    </Flex>
  );
}
