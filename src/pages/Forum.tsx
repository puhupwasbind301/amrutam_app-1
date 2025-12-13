import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { forumPosts } from "@/data/products";
import { Search, Heart, MessageSquare, Bookmark, MoreVertical, ChevronDown, Filter } from "lucide-react";

const Forum = () => {
  const [activeTab, setActiveTab] = useState<"questions" | "thoughts">("questions");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-sage/40 to-background py-12">
        <div className="container-main text-center">
          <h1 className="font-display text-3xl md:text-4xl text-foreground">
            Find Discussions Related To Ayurveda Here
          </h1>
        </div>
      </div>

      {/* Forum Content */}
      <div className="container-main py-12">
        <div className="max-w-2xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-border mb-6">
            <button
              onClick={() => setActiveTab("questions")}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === "questions" ? "text-forest" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Questions
              {activeTab === "questions" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("thoughts")}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === "thoughts" ? "text-forest" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Thoughts
              {activeTab === "thoughts" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />
              )}
            </button>
          </div>

          {/* Search and Ask */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Hair Fall"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full input-ayurveda pl-10 pr-10"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Filter className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* User and Ask Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium">Priya Singh</span>
            </div>
            <Button className="bg-forest hover:bg-forest-light text-primary-foreground">
              Ask Question
            </Button>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {forumPosts.map((post) => (
              <div key={post.id} className="card-ayurveda p-6">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                      <span className="text-forest">👤</span>
                    </div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                  <button>
                    <MoreVertical className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                {/* Question */}
                <h3 className="font-display text-lg text-foreground mb-2">
                  Question: {post.question}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.description}
                </p>

                {/* Replies indicator */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>Replies • {post.replies} reply</span>
                  <button className="text-forest hover:underline">
                    View All {post.doctorReply ? "9" : post.replies} Replies
                  </button>
                </div>

                {/* Doctor Reply */}
                {post.doctorReply && (
                  <div className="bg-sage/30 rounded-xl p-4 ml-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop"
                          alt={post.doctorReply.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-forest">{post.doctorReply.name}</p>
                          <p className="text-xs text-muted-foreground">{post.doctorReply.date}</p>
                        </div>
                      </div>
                      <button>
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <p className="text-sm text-foreground mb-3">
                      <span className="font-medium">Ans.</span> {post.doctorReply.answer}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-destructive text-destructive" />
                        {post.doctorReply.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        {post.doctorReply.comments}
                      </span>
                    </div>
                  </div>
                )}

                {/* Post Footer */}
                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                  <button className="flex items-center gap-2 hover:text-forest transition-colors">
                    <Heart className="w-4 h-4" />
                    {post.likes} Likes
                  </button>
                  <button className="flex items-center gap-2 hover:text-forest transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    {post.replies} Reply
                  </button>
                  <button className="flex items-center gap-2 hover:text-forest transition-colors">
                    <Bookmark className="w-4 h-4" />
                    {post.saves} Saves
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <button className="w-full flex items-center justify-center gap-2 py-4 mt-8 text-foreground font-medium hover:text-forest transition-colors">
            Load More
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Forum;
