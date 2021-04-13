namespace API.Helpers
{
    /*
        params class for get messages
        Username : string - which user's messages to get
        Container : string - filter
    */
    public class MessageParams : PaginationParams
    {
        public string Username { get; set; }
        public string Container { get; set; } = "Unread";
    }
}